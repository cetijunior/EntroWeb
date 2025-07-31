import React from 'react';
import Beams from './Beams';
import { useTranslation, Trans } from "react-i18next";

function CTA() {
    const { t } = useTranslation("services");

    return (
        <div className="relative w-full h-[600px] overflow-hidden">
            {/* Beams background */}
            <div className="absolute inset-0 z-0">
                <Beams
                    beamWidth={2}
                    beamHeight={15}
                    beamNumber={12}
                    lightColor="#ffffff"
                    speed={2}
                    noiseIntensity={1.75}
                    scale={0.2}
                    rotation={0}
                />
            </div>

            {/* Overlay to improve contrast */}
            <div className="absolute inset-0 bg-black/20 z-10" />

            {/* CTA content */}
            <div className="relative z-20 flex flex-col items-center justify-center text-center h-full max-w-5xl mx-auto px-6">
                <h3 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
                    <Trans
                        i18nKey="cta.headline"
                        ns="services"
                        components={{
                            1: <span className="animate-pulse bg-gradient-to-r from-white via-violet-950 to-indigo-200 bg-clip-text text-transparent" />
                        }}
                    />
                </h3>

                <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mb-10 leading-relaxed">
                    {t("cta.paragraph")}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                    <button className="px-8 py-4 bg-white text-black font-semibold rounded-full shadow-lg hover:scale-105 transition">
                        {t("cta.buttonStart")}
                    </button>
                    <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-gray-900 transition shadow-md">
                        {t("cta.buttonWork")}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CTA;



