import { SelectList } from "react-native-dropdown-select-list"

export default DropdownMenu = (props) => {
    const data = [
        {key:"1", value:"ounce"},
        {key:"2", value:"cup"},
        {key:"3", value:"inches"},
        {key:"4", value:"Fahrenheit"}
    ];

    return (
        <SelectList
            setSelected={(val) => props.setSelected(val)}
            data={data}
            save="value"
            search={false}
        />        
    )
};