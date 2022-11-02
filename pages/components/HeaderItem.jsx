const HeaderItem = ({title, Icon}) => {
    return ( 
        <div className=" flex flex-col items-center
        w-12 sm:w-20 hover:text-white cursor-pointer group">
            <Icon className="h-8 mb-1" />
            <p className="opacity-50 group-hover:opacity-100
             tracking-widest" >{title}</p>
        </div>
     );
}
 
export default HeaderItem;