export const Counter = () => {
  const incident = " Eating a Rocky's Hamburger";
  const count = 0;

  return (
    <main className="Counter">
      <h1>Days Since {incident}</h1>
      <p className="count">{count}</p>
      <section className="controls">
        <button>Increment</button>
        <button>Reset</button>
        <button>Decrement</button>
      </section>
    </main>
  );
};

export default Counter;
