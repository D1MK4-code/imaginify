import React, {FunctionComponent, ReactNode} from 'react';

const Layout: FunctionComponent<Props> = ({children}) => {
   return (
      <main className="auth">
         {children}
      </main>
   );
};

type Props = {
   children: ReactNode;
}

export default Layout;