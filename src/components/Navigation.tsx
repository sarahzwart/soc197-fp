import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation'
//import Image from "next/image";


export const Navbar = () => {
  const router = useRouter()
  const scrollToSection = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="flex items-center justify-center px-6 pt-3 pb-2" >
      <div className="flex ">
        <Button
          variant="ghost"
          className="font-bold text-[#675D50] hover:text-[#4a433a] h-10"
          onClick={() => scrollToSection("mitigation")}
        >
          MITIGATION
        </Button>
        <Button
          variant="ghost"
          className="font-bold text-[#675D50] hover:text-[#4a433a] h-10"
          onClick={() => scrollToSection("adaptation")}
        >
          ADAPTATION
        </Button>
        <Button
          variant="ghost"
          className="font-bold text-[#675D50] hover:text-[#4a433a] h-10"
          onClick={() => scrollToSection("international")}
        >
          CLIMATE EFFORTS
        </Button>
        <Button
          variant="ghost"
          className="font-bold text-[#675D50] hover:text-[#4a433a] h-10"
          onClick={() => router.push('/games')}
        >
          GAMES
        </Button>
      </div>
    </nav>
  );
};
