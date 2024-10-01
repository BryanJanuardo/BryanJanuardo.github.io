import React from 'react'

interface listContent {
  contents: string[];
}

const SubNavbar: React.FC<listContent> = ({contents}) => {
  return (
    <nav id="subnavbar" className="bg-lightdark text-white py-2 w-3/4">
    <div className="container mx-auto flex justify-center space-x-4">
        {contents.map((content, idx) => (
            <li key={idx} className='list-none text-base'>
                <a href={`#${content}`} className="h-full px-2 hover:underline underline-offset-8 transition duration-300 ease-in-out">{content}</a>
            </li>
        ))}
    </div>
    </nav>
  )
}

export default SubNavbar
