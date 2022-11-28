export function Bg() {
    return (
        <>
            <style jsx global>{`
                .background_main__HFlNS {
                    width: 90vw;
                    min-height: 100vh;
                    position: absolute;
                    display: flex;
                    justify-content: center;
                    
                    pointer-events: none;
                }

                .background_content__pv7b5 {
                    transform: translateX(0px) translateY(0px) translateZ(0px);
                    max-width: 1800px;
                    background-image: radial-gradient(
                        at 45% 10%,
                        #4bfefe 0,
                        transparent 100%
                    );
                    position: absolute;
                    content: '';
                    width: 100%;
                    min-width: 0;
                    height: 400px;
                    filter: blur(100px) saturate(150%);
                    top: 10px;
                    opacity: 0.13;
                }
            `}</style>
            <div className='background_main__HFlNS'>
                <div className='background_content__pv7b5' />
            </div>
        </>
    )
}
