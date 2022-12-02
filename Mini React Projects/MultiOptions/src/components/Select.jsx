import React from "react";
import Select from "react-select";
import "./style.css";
import makeAnimated from "react-select/animated";
import { useState } from "react";

const animatedComponents = makeAnimated();

const options = [
  { value: "Cor 01", label: "Água-marinha" },
  { value: "Cor 02", label: "Celeste" },
  { value: "Cor 03", label: "Azul manteiga" },
  { value: "Cor 04", label: "Caqui" },
  { value: "Cor 05", label: "Carmim clássico" },
  { value: "Cor 06", label: "Castanho claro" },
  { value: "Cor 07", label: "Fuligem" },
  { value: "Cor 08", label: "Jasmine" },
];

const MultiSelect = () => {
  const [selectedOptions, setSelectdOptions] = useState([]);

  const handleSelect = () => {
    console.log(selectedOptions);
  };

  return (
    <>
      <p>Sou a Pagina select</p>
      <Select
        components={animatedComponents}
        className="select"
        isMulti
        onChange={(item) => setSelectdOptions(item)}
        options={options}
        isClearable={true}
        isSearchable={true}
        isDisabled={false}
        isLoading={true}
        isRtl={false}
        closeMenuOnSelect={false}
      />

      <button onClick={handleSelect}>Imprimir Cores</button>
    </>
  );
};

export default MultiSelect;
