import { Fragment } from "react";

function ListIterator(props) {
  //   console.log(props);
  let { navlist } = props;
  console.log(navlist);
  return (
    <>
      {navlist.map((ele, index) => {
        // console.log(ele);
        return (
          <Fragment key={index}>
            <li>
              <a href="">{ele}</a>
            </li>
          </Fragment>
        );
      })}
    </>
  );
}
export default ListIterator;
