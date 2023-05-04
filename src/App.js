import { useCallback, useEffect, useMemo, useState } from "react";
import "/src/styles.css";
export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);
  useEffect(() => {
    setData([
      { name: "Direnç", type: Text },
      { name: "Kondansatör", type: Text },
      { name: "Diyod", type: Text },
      { name: "Sensör", type: Text },
      { name: "Servo Motor", type: Text },
      { name: "Buton", type: Text },
      { name: "Bobin", type: Text },
      { name: "Röle", type: Text },
      { name: "Buzzer", type: Text },
      { name: "Regülatör", type: Text }
    ]);
  }, []);

  //input'un Oluşumu Başlangıcı
  const handleInputChange = useCallback((e) => {
    setSearchTerm(e.target.value);
  }, []);

  const filteredData = useMemo(() => {
    return data.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, data]);

  return (
    <div className="App">
      <h1 className="header">ELEKTRONİK MALZEMELER</h1>
      <input
        className="input"
        type="text"
        id="arama"
        value={searchTerm}
        placeholder="Aradığın elektronik malzemenin adını yaz"
        onChange={(e) => handleInputChange(e)}
      />
      {filteredData.map((item) => {
        return <div class="item-container"> {item.name} </div>;
      })}
    </div>
  );
}
//İnput'un Oluşumu Sonucu
