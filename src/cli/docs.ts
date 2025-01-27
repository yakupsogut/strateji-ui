#!/usr/bin/env node

import { spawn } from 'child_process';
import { join, dirname } from 'path';
import fs from 'fs-extra';

const PORT = process.env.PORT || 3333;
const NPX_CMD = process.platform === 'win32' ? 'npx.cmd' : 'npx';

// Paket dizinini bul
const packageDir = join(dirname(__dirname), '..');

// Tarayıcıyı açmak için basit bir fonksiyon
function openBrowser(url: string) {
  const start = process.platform === 'win32' ? 'start' :
               process.platform === 'darwin' ? 'open' : 'xdg-open';
               
  spawn(start, [url], { shell: true });
}

function runCommand(command: string, args: string[], options: Record<string, unknown>): Promise<void> {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      ...options,
      stdio: 'inherit',
      shell: true
    });

    child.on('close', (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`Command failed with code ${code}`));
      }
    });

    child.on('error', reject);
  });
}

async function startDocs() {
  console.log('🚀 Strateji UI dokümantasyonu başlatılıyor...');

  try {
    const tempDir = join(process.cwd(), '.strateji-docs');
    
    // Temp klasörünü temizle
    await fs.remove(tempDir);
    await fs.ensureDir(tempDir);

    // Build dosyalarını kopyala
    console.log('📦 Dokümantasyon dosyaları hazırlanıyor...');
    await fs.copy(join(packageDir, '.next'), join(tempDir, '.next'));
    await fs.copy(join(packageDir, 'public'), join(tempDir, 'public'));
    await fs.copy(join(packageDir, 'src/app/docs'), join(tempDir, 'src/app/docs'));

    // package.json oluştur
    await fs.writeJSON(join(tempDir, 'package.json'), {
      name: 'strateji-docs',
      private: true,
      scripts: {
        start: 'next start'
      },
      dependencies: {
        next: '>=15.0.0',
        react: '^19.0.0',
        'react-dom': '^19.0.0'
      }
    });

    // Port numarasını .env dosyasına yaz
    await fs.writeFile(join(tempDir, '.env.local'), `PORT=${PORT}`);

    // Tarayıcıyı aç
    setTimeout(() => {
      openBrowser(`http://localhost:${PORT}`);
    }, 3000);

    // Sunucuyu başlat
    console.log(`📚 Dokümantasyon sunucusu başlatılıyor (Port: ${PORT})...`);
    await runCommand(NPX_CMD, ['next', 'start'], {
      cwd: tempDir,
      env: { ...process.env, PORT: PORT.toString() }
    });

  } catch (error) {
    console.error('❌ Bir hata oluştu:', error);
    process.exit(1);
  }
}

startDocs().catch((error) => {
  console.error('❌ Bir hata oluştu:', error);
  process.exit(1);
}); 