import React from 'react';

interface Props {
    description: string,
	className: string,
}

const ParsedDescription: React.FC<Props> = ({description, className = ''}) => {
    const parsed = description.split('\n');
    console.log(parsed)
    return (
      <p className={className}>
        {parsed.map((item, index) => (
          <React.Fragment key={index}>
            {item}
            {index < parsed.length - 1 && <br />}
          </React.Fragment>
        ))}
      </p>
    );
  };


export {ParsedDescription}


