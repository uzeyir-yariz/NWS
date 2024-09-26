import Progsbars from "../../../components/tool/Progsbars";

const Languages = (Props) => {

  const {img_url, name, status, width} = Props;


  return (
    <tr style={{height: "70px"}} className="">

      <td>
        <img src={img_url} height="40" alt={`${name}  logo`} /> {name}
      </td>
      
      <td style={{width: "85%"}}>

        <Progsbars width={width} color={status} />
      
      </td>
    </tr>
  );
};

export default Languages;
