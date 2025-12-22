Components, props & Exports:
===================================================

🔸React components are functions returning JSX
🔸Props are just arguments to components
🔸Use composition (children, prop drilling, or context) to build flexible UIs

╰➤Two types of exports:
  🔸Named export:
    export function Button() {}
    import { Button } from './Button';

  🔸Default export:
    export default Button;
    import Button from './Button';

╰➤Children Composition
  Children composition in React means: components do not decide what goes inside them — the parent does.
  You pass UI as children, and the component just renders whatever it receives.
  Think of it like a box: the box defines shape & rules, not the content.

   ➤Basic idea
    function Card({ children }) {
      return (
        <div className="card">
          {children}
        </div>
      );
    }

   ➤Usage:
    <Card>
      <h2>Hello</h2>
      <p>This is inside the card</p>
    </Card>

    Without children composition: Rigid, limited, boring.
    With children composition: Flexible, reusable, powerful.

    Mental model:
      Props = data
      Children = UI structure

   🔸Advanced composition(Named children):
      You can compose parts, not just content.

      function Modal({ header, body, footer }) {
        return (
          <div>
            <div>{header}</div>
            <div>{body}</div>
            <div>{footer}</div>
          </div>
        );
      }

     ➤Usage:
      <Modal
        header={<h2>Title</h2>}
        body={<p>Content</p>}
        footer={<button>Close</button>}
      />

      Same idea, just more control./

   🔸Component-as-children (very powerful):
      function Layout({ children }) {
        return (
          <>
            <Navbar />
            {children}
            <Footer />
          </>
        );
      }

     ➤Usage:
      <Layout>
        <Dashboard />
      </Layout>
    This is how layouts work in real apps (Next.js, admin panels, dashboards).

   🔸Children With logic:
      function Protected({ isLoggedIn, children }) {
        if (!isLoggedIn) return <Login />;
        return children;
      }

     ➤Usage:
      <Protected isLoggedIn={true}>
        <Dashboard />
      </Protected>
