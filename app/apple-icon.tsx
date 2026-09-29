import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 36,
        background: '#10182b',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 132,
          height: 132,
          borderRadius: '50%',
          border: '6px solid transparent',
          borderImage: 'linear-gradient(135deg, #2e63ff, #7c3aed) 1',
          color: '#f7f8fa',
          fontSize: 78,
          fontWeight: 800,
          letterSpacing: -6,
        }}
      >
        2В
      </div>
    </div>,
    size,
  )
}
