#!/usr/bin/env node

import { spawn } from 'child_process';
import { join } from 'path';
import fs from 'fs';
import os from 'os';

const DOCS_REPO = 'https://github.com/yakupsogut/strateji-ui.git';
const TEMP_DIR = join(os.tmpdir(), 'strateji-ui-docs');

async function cloneAndStartDocs() {
  console.log('🚀 Strateji UI dokümantasyonu başlatılıyor...');

  // Temp klasörü oluştur
  if (!fs.existsSync(TEMP_DIR)) {
    fs.mkdirSync(TEMP_DIR, { recursive: true });
  }

  // Repo'yu clone'la
  const git = spawn('git', ['clone', DOCS_REPO, TEMP_DIR]);

  git.on('close', (code) => {
    if (code !== 0) {
      console.error('❌ Dokümantasyon reposu indirilemedi.');
      return;
    }

    // Bağımlılıkları yükle ve dev sunucusunu başlat
    const npm = spawn('npm', ['install'], { cwd: TEMP_DIR });

    npm.on('close', (code) => {
      if (code !== 0) {
        console.error('❌ Bağımlılıklar yüklenemedi.');
        return;
      }

      console.log('📚 Dokümantasyon sunucusu başlatılıyor...');
      const dev = spawn('npm', ['run', 'dev'], { 
        cwd: TEMP_DIR,
        stdio: 'inherit'
      });

      dev.on('error', (error) => {
        console.error('❌ Sunucu başlatılamadı:', error);
      });
    });
  });
}

cloneAndStartDocs(); 