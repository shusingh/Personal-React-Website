import React, { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-python.js';
import 'prismjs/themes/prism-okaidia.css';

export interface IPythonCodeBlock {
  code: string;
}

const PythonCodeBlock: React.FC<IPythonCodeBlock> = ({
  code,
}: IPythonCodeBlock) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div>
      <pre className="language-python">
        <code className="text-sm">{`${code}`}</code>
      </pre>
    </div>
  );
};

export default PythonCodeBlock;
