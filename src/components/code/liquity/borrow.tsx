import React from 'react';
import { VmComponent } from '@/components/vm/VmComponent';
import { useVMContext } from '@/vm-context';

export const borrowMeta: any = {
  name: 'bos-liquity-borrow',
  displayName: '[Liquity] Borrow',
  importPath: '@/components/code',
  importName: 'Borrow',
  props: {
    input: {
      type: "slot",
      defaultValue: [
        {
          name: 'ui-input',
          type: "component",
        }
      ]
    },
    text: {
      type: "slot",
      defaultValue: [
        {
          name: 'ui-text',
          type: "component",
        }
      ]
    },
    textInput: {
      type: "slot",
      defaultValue: [
        {
          name: 'ui-text',
          type: "component",
        }
      ]
    },
    textInfo: {
      type: "slot",
      defaultValue: [
        {
          name: 'ui-text',
          type: "component",
        }
      ]
    },
    button: {
      type: "slot",
      defaultValue: [
        {
          name: 'ui-button',
          type: "component",
        }
      ]
    },
  },
};

export function Borrow(props: any) {
  const context = useVMContext()

  const renderPlasmicElement = (element: any, values: any) => {
    return React.cloneElement(props[element], values)
  }

  return (
    <VmComponent
      src="1mateus.testnet/widget/liquity-borrow"
      props={{
        ...context,
        renderPlasmicElement,
        plasmicRootClassName: props.className,
      }}
    />
  );
}
