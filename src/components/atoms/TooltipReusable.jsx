import React from 'react';
import { Tooltip } from '@nextui-org/react';

export default function TooltipReusable({
  children,
  text,
  show,
  color
}) {
  return (
    <Tooltip
      className={show ? '' : 'hidden'}
      content={text}
      color={color}
    >
      {children}
    </Tooltip>
  );
}
