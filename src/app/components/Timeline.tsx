export default function Timeline() {
  return (
    <ul className="timeline timeline-vertical mt-20">
      <li>
        <div className="timeline-start timeline-box text-sm">H&M -100€</div>
        <hr />
      </li>
      <li>
        <hr />
        <div className="timeline-end timeline-box text-sm">Zara -65.60€</div>
        <hr />
      </li>
      <li>
        <hr />
        <div className="timeline-start timeline-box text-sm">Uniqlo -30€</div>
        <hr />
      </li>
      <li>
        <hr />
        <div className="timeline-end timeline-box text-sm">Coffee -4.99€</div>
        <hr />
      </li>
      <li>
        <hr />
        <div className="timeline-start timeline-box text-sm">Sezanne -80€</div>
      </li>
    </ul>
  );
}
