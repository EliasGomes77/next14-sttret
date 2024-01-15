import Link from "next/link";
import Image from "next/image";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Poppins({
    subsets: ["latin"],
    weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const Logo = () => {
    return (
        <Link href="/">
            <div className="flex items-center gap-x-4 hover:opacity-75 transition">
                <div className="p-1 mr-14 shrink-0 lg:mr-0 lg:shrink">
                    <Image
                        src="/Logo.png"
                        alt="Sttret"
                        height="60"
                        width="60"
                    />
                </div>
                <div className={cn("hidden lg:block", font.className)}>
                    <p className="text-lg font-semibold">Sttret</p>
                    <p className="text-xs text-muted-foreground">
                        Painel de Controle
                    </p>
                </div>
            </div>
        </Link>
    );
};
