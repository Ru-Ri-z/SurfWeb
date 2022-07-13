import React, { useState, useEffect, useRef } from "react";
import "./OtherReports.scss";
import otherReports from "../../utils/constants/otherReports";
import { FiSearch } from "react-icons/fi";
import { Suggestions } from "../Suggestions";
import useClickOutsideRef from "../../hooks/useClickOutsideRef";
const OtherReports = () => {
  const [suggestions, setSuggestions] = useState([]);
  const [filterReports, setFilterReports] = useState(otherReports);
  const [input, setInput] = useState("");
  const searchContainer = useRef(null);
  useClickOutsideRef(searchContainer, setSuggestions);
  const handleChange = (e) => {
    setInput(e.target.value.toLowerCase());
  };

  useEffect(() => {
    if (input.length < 3) {
      setSuggestions([]);
      return;
    }
    const filterArr = otherReports.filter((item) =>
      item.title.toLowerCase().includes(input)
    );
    setSuggestions(filterArr);
  }, [input]);

  const handleSearch = () => {
    if (!input) return setFilterReports(otherReports);
    const filterArr = otherReports.filter((item) =>
      item.title.toLowerCase().includes(input)
    );
    setSuggestions([]);
    setFilterReports(filterArr);
  };

  const onClean = () => {
    setSuggestions([]);
    setFilterReports(otherReports);
  };

  return (
    <div className="other-reports-section">
      <div className="other-reports-title">
        <h2>
          Other Reports <span>and surveys</span>
        </h2>
      </div>
      <div className="other-reports-searcher" ref={searchContainer}>
        <input
          type="text"
          placeholder="Buscar por títulos"
          value={input}
          onChange={handleChange}
        />
        <FiSearch
          size={40}
          color="adadad"
          style={{ paddingLeft: "10px", cursor: "pointer" }}
          onClick={handleSearch}
        />
        {suggestions?.length > 0 && (
          <Suggestions
            suggestions={suggestions}
            setSuggestions={setSuggestions}
            setFilterReports={setFilterReports}
          />
        )}
        <button className="clean-search" onClick={onClean}>
          Limpiar
        </button>
      </div>
      {filterReports?.length === 0 && (
        <div style={{ minHeight: "60vh" }}>
          <h3 className="other-reports-no-result">
            No se encontraron resultados
          </h3>
        </div>
      )}
      {filterReports.map((item, idx) => (
        <div className="app__slider-container-reports" key={idx}>
          <div className="app__highlighted-reports-slider">
            <div className="app__highlighted-reports-slider-frame">
              <iframe
                src={item.url}
                width={`${item.horizontal ? "412" : "295"}`}
                height={`${item.horizontal ? "248" : "412"}`}
                allow="autoplay"
                title={`frame1`}
                loading="lazy"
                border={0}
              ></iframe>
            </div>
            <div className="app__highlighted-reports-slider-paragraphs">
              <p>{item.date}</p>
              {item.subtitle && <h4>{item.subtitle}</h4>}
              <h3>{item.title}</h3>
              {item.paragraphs.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
              <div>
                <a
                  href={item.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  download={item.downloadName}
                >
                  Download
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OtherReports;
