import style from './section.module.css';

const Section = ({ title, children }) => {
  return (
    <section>
      <p className={style.title}>{title}</p>
      {children}
    </section>
  );
};

export default Section;
