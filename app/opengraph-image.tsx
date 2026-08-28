import { ImageResponse } from 'next/og'

export const alt = '2В Сервис — ИТ-инфраструктура и корпоративные системы'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(<div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '64px 72px', background: '#10182b', color: '#f7f8fa', fontFamily: 'sans-serif' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}><div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 76, height: 76, border: '2px solid #2e63ff', borderRadius: 20, fontSize: 34, fontWeight: 800 }}><span style={{ color: '#2e63ff' }}>2</span>В</div><div style={{ fontSize: 28, fontWeight: 700 }}>2В Сервис</div></div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 26 }}><div style={{ color: '#ff6b55', fontSize: 22, fontWeight: 700, letterSpacing: 3 }}>ЕДИНЫЙ ИТ-ПАРТНЁР</div><div style={{ maxWidth: 980, fontSize: 70, lineHeight: 1.04, letterSpacing: -3, fontWeight: 750 }}>Инфраструктура, на которую можно положиться.</div></div>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#aeb6c9', fontSize: 22 }}><span>ИТ-аутсорсинг · безопасность · корпоративные системы</span><span>2bservice.ru</span></div>
  </div>, size)
}
