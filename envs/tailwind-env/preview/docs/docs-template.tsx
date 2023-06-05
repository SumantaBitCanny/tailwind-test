import { DocsRootProps } from '@teambit/docs';
import React, { ReactNode, ComponentType } from 'react';
import ReactDOM from 'react-dom'; // After setting the envs dependencies to React 17, change the import to 'react-dom'
import { DocsApp } from '@teambit/react.ui.docs-app';

/**
 * a reference to a provider function.
 */
export type DocsProvider = ComponentType<{ children: ReactNode }>;

export function createDocsTemplate(Provider: DocsProvider = React.Fragment) {
  const DocsTemplate = ({
    componentId,
    docs,
    compositions,
    context,
  }: DocsRootProps) => {
    const rootElm = document.getElementById('root');
    /* this template uses react 17 mounting function */
    ReactDOM.render(
      <Provider>
        <DocsApp
          componentId={componentId}
          docs={docs}
          compositions={compositions}
          context={context}
        />
        ,
      </Provider>,
      rootElm
    );
  };
  DocsTemplate.apiObject = true;
  return DocsTemplate;
}