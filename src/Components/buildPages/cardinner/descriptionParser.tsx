import React from 'react';

interface Props {
    description: string;
}

const ParsedDescription: React.FC<Props> = ({description}) => {
    const parsed = description.split('\n');
    console.log(parsed)
    return (
      <>
        {parsed.map((item, index) => (
          <React.Fragment key={index}>
            {item}
            {index < parsed.length - 1 && <br />}
          </React.Fragment>
        ))}
      </>
    );
  };


export {ParsedDescription}


