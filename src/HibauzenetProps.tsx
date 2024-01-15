interface HibauzenetProps {
  biztonsag: boolean;
  mennyirebizt: boolean;
  hibauzenetek: string[];
}
export function Hibauzenet(props: HibauzenetProps) {
  return <ul
    className={props.biztonsag ? 'Biztonsag' : ''}
    style={{
      color: props.mennyirebizt ? 'orange' : 'red'
    }}
  >
    {props.hibauzenetek.map(msg => <li>{msg}</li>)}
  </ul>;
}
