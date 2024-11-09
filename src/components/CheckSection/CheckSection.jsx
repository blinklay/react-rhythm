import SmallCollectionList from "../SmallCollectionList/SmallCollectionList";
import styled from "./CheckSection.module.css";
export default function CheckSection() {
  return (
    <section className={styled.check}>
      <h2 className={styled.header}>
        Check out the <span>Store</span>
      </h2>

      <div className={styled.wrapper}>
        <SmallCollectionList text="NEW ON THE BOARD" />
        <SmallCollectionList text="TOP SELLING" />
      </div>
    </section>
  );
}
