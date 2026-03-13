export default function WaveDivider({
    from = 'var(--ivory)',
    to = 'var(--ivory)',
    flip = false,
    variant = 'silk'
}: {
    from?: string;
    to?: string;
    flip?: boolean;
    variant?: 'silk' | 'gentle' | 'sharp';
}) {
    /* Each variant uses a smooth, organic curve */
    const paths: Record<string, string> = {
        silk: 'M0,0 L0,55 C180,90 420,20 720,45 C1020,70 1260,15 1440,50 L1440,0 Z',
        gentle: 'M0,0 L0,45 Q360,85 720,40 Q1080,0 1440,35 L1440,0 Z',
        sharp: 'M0,0 L0,40 C480,95 960,5 1440,55 L1440,0 Z',
    };

    return (
        <div style={{
            position: 'relative',
            width: '100%',
            lineHeight: 0,
            overflow: 'hidden',
            background: to,
            marginTop: '-1px',
            marginBottom: '-1px',
            transform: flip ? 'scaleY(-1)' : undefined,
            zIndex: 2,
        }}>
            <svg
                viewBox="0 0 1440 100"
                preserveAspectRatio="none"
                style={{
                    display: 'block',
                    width: 'calc(100% + 2px)',
                    marginLeft: '-1px',
                    height: '70px',
                }}
            >
                <path d={paths[variant]} fill={from} />
            </svg>
        </div>
    );
}
