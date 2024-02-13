import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

const Footer = () => {
  return (
    <div className="w-full bg-secondary py-6 px-5">
      <p className="text-gray-400 text-xs font-bold opacity-75">© {' '}
        <span className="capitalize text-sm">
            {format(new Date(), "yyyy", {
              locale: ptBR,
            })}
          </span>
        {' '} Copyright José Ronaldo</p>
    </div>
  );
};

export default Footer;
