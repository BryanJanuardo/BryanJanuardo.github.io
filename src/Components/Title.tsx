import React from 'react'

interface TitleProps {
    text: string;
}

const Title: React.FC<TitleProps> = ({ text }) => {
  return (
    <h2 className="my-6 text-5xl font-bold text-center text-dark my-4">
        {text}
    </h2>
  )
}

export default Title
