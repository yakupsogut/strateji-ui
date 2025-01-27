# Strateji UI

Modern ve özelleştirilebilir React UI bileşenleri kütüphanesi. Tailwind CSS ile stillendirilmiş, TypeScript ile yazılmış ve Next.js 15+ ile uyumlu.

## Özellikler

- 🎨 Modern ve özelleştirilebilir tasarım
- 📱 Responsive ve mobile-first yaklaşım
- 🌙 Koyu/açık tema desteği
- 🔍 TypeScript ile tip güvenliği
- ⚡ Yüksek performans
- 📦 Kolay entegrasyon
- 📚 Kapsamlı dokümantasyon

## Kurulum

```bash
npm install strateji-ui
```

## Hızlı Başlangıç

1. Tailwind CSS yapılandırmanıza Strateji UI'ın stil dosyasını ekleyin:

```js
// tailwind.config.js
module.exports = {
  content: [
    // ...
    "./node_modules/strateji-ui/**/*.{js,ts,jsx,tsx}",
  ],
}
```

2. Stil dosyasını import edin:

```js
import "strateji-ui/styles.css";
```

3. Komponentleri kullanmaya başlayın:

```jsx
import { StratejiButton, Alert, Toast } from "strateji-ui";

function App() {
  return (
    <div>
      <StratejiButton variant="primary">
        Tıkla
      </StratejiButton>
    </div>
  );
}
```

## Dokümantasyon

Detaylı dokümantasyon için aşağıdaki komutu çalıştırın:

```bash
npx strateji-docs
```

## Komponentler

- **Alert**: Kullanıcıya önemli bilgileri göstermek için
- **Alert Dialog**: Onay gerektiren işlemler için modal dialog
- **Button**: Temel düğme bileşeni
- **Strateji Button**: Özelleştirilmiş modern düğme bileşeni
- **Card**: İçerikleri gruplamak için kart bileşeni
- **Toast**: Geçici bildirimler için toast bileşeni

## Gereksinimler

- React 19+
- Next.js 15+
- Tailwind CSS 3+
- Node.js 18+

## Katkıda Bulunma

1. Bu depoyu fork edin
2. Yeni bir branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'feat: add amazing feature'`)
4. Branch'inizi push edin (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## Lisans

MIT lisansı altında dağıtılmaktadır. Daha fazla bilgi için `LICENSE` dosyasına bakın.

## İletişim

Strateji Team - [info@strateji.com](mailto:info@strateji.com)

Proje Linki: [https://github.com/strateji/strateji-ui](https://github.com/strateji/strateji-ui)
