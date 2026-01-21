import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
 
export const alt = 'PlayZone Glodeni VR Games'
export const size = {
  width: 1200,
  height: 630,
}
 
export const contentType = 'image/png'
 
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
        }}
      >
        <img
          src={"/playzone.png"}
          width={160}
          height={160}
          style={{ marginBottom: 32, borderRadius: 32, boxShadow: '0 4px 32px #0004' }}
          alt="PlayZone Glodeni Logo"
        />
        <div
          style={{
            fontSize: 80,
            fontWeight: 'bold',
            color: 'white',
            marginBottom: 20,
            textAlign: 'center',
          }}
        >
          PlayZone Glodeni
        </div>
        <div
          style={{
            fontSize: 40,
            color: 'rgba(255, 255, 255, 0.9)',
            textAlign: 'center',
            maxWidth: '80%',
          }}
        >
          Jocuri VR pentru Copii și Adulți
        </div>
        <div
          style={{
            fontSize: 30,
            color: 'rgba(255, 255, 255, 0.8)',
            marginTop: 20,
            textAlign: 'center',
          }}
        >
          📍 Glodeni, Republica Moldova<br/>
          str. Ștefan cel Mare 22
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
