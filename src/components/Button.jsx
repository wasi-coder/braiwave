import ButtonSvg from "../assets/svg/ButtonSvg";    

const Button = ({ className, href, onClick, children, px, white }) => {
  const classes = `
 button 
 relative
 inline-flex 
 items-center 
 justify-center 
 transition-colors 
hover:text-color-1
 overflow-hidden
 ${px || "px-7"}  
 py-3             
 ${white ? "text-white" : "text-n-1"} 
 ${className || ""}
 `;
    
  if (href) {
    return (
      <a href={href} className={classes}>
        <span className="relative z-10">{children}</span>
        {ButtonSvg(white)}
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick}>
      <span className="relative z-10">{children}</span>
      {ButtonSvg(white)}
    </button>
  );
};

export default Button;