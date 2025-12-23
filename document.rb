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

⭐Professional-Level Suggestions:
  Make a dedicated index.js inside components folder
  This is how companies structure React libs:
    components/
      Button.js
      Card.js
      Header.js
      index.js

    Inside index.js:
      export { default as Card } from "./Card";
      export { default as Header } from "./Header";
      export { Button } from "./Button";

    Then in App:
      import { Header, Card, Button } from "./components";

  This is Clean, scalable, industry standard.

╰➤Pass functions as props to children
  This is how parent-child communication happens.
  Parent to Child event passing.
  Children trigger actions defined in parent components.

  function ChildButton({ onChildClick }) {
    return (
      <button onClick={onChildClick}>Child Click</button>
    );
  }

  function App() {
    function handleChildClick() {
      console.log("Child button clicked!");
    }

    return <ChildButton onChildClick={handleChildClick} />;
  }

╰➤React is one-way data flow(parent to child)
  Child does NOT directly pass data to parent in React.
  But:
  Child can send information to parent by calling a function given by the parent.
  This is the most important React concept after props.
  Child cannot mutate parent's state'.

  Step 1:Parent defines a function:
    function Parent() {
      function handleDataFromChild(value) {
        console.log("From child:", value);
      }

      return <Child onSend={handleDataFromChild} />;
    }

  Step 2:Parent passes function as prop:
    <Child onSend={handleDataFromChild} />

  Step 3: Child calls the function:
    function Child({ onSend }) {
      return (
        <button onClick={() => onSend("Hello Parent")}>
          Send Data
        </button>
      );
    }

  This way child to parent communication done.

╰➤Synthetic events:
  Event objects are synthetic events. You can still get e.target.value etc.

  In plain JavaScript:
    document.querySelector("input").addEventListener("change", function (event) {
      console.log(event.target.value);
    });

  Here, event is a native browser event (created by the browser itself).

  In React:
    <input onChange={(e) => console.log(e.target.value)} />

  Here e is NOT the browser event.
    It is a SyntheticEvent.
    So what does “synthetic event” mean?
    SyntheticEvent = React ka wrapper around browser event

  React creates its own event object that:
    Normalizes behavior across browsers
    Works the same in Chrome, Firefox, Safari
    Improves performance (event delegation)

  But: React copies all the important stuff from the real event

  So this still works:
    e.target
    e.target.value
    e.preventDefault()
    e.stopPropagation()

╰➤React re-renders when:
    Parent component re-renders
    Props change
    State changes
    Context updates

╰➤Slots API — very common in UI libraries:
    Create a Layout component:
      function Layout({ header, content, footer }) {
        return (
          <div>
            <header>{header}</header>
            <main>{content}</main>
            <footer>{footer}</footer>
          </div>
        );
      }

    Then use it like:
      <Layout
        header={<h2>My Header</h2>}
        content={<p>This is the main content</p>}
        footer={<small>2025 React Course</small>}
      />
