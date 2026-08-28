import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(<div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 36, background: '#10182b', color: '#f7f8fa', fontSize: 82, fontWeight: 800, letterSpacing: -8 }}><span style={{ color: '#2e63ff' }}>2</span>В<span style={{ color: '#ff6b55' }}>.</span></div>, size)
}
