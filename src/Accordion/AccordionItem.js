import { useState } from "react";

export const AccordionItem = ({title, content, timetable}) => {
    const [isOpen, setIsOpen] = useState(false);

const handleIsOpen =() => {
    setIsOpen(!isOpen)
}

    return ( <div>

<div className={isOpen ? 'active' : 'default'} onClick = {handleIsOpen}>
    <div className="title"> <b> {title}</b></div></div>
{
    isOpen&& <div className="content"> {content}  </div>
}
{
    isOpen&& <div className="content bold"> {timetable} </div>
}
    </div>

    )
}