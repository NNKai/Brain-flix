

export default function TextInput({ name, value, label, placeholder, listener, error }) {
    let inputClass = error ? "error" : "";
  
    let errorNotification = error ? "ErrorNotification" : "ErrorNotification hidden";
  
    return (
      <div className="TextInput">
        <label htmlFor={name}>{label}</label>
        <input
          type="text"
          name = {name}
          value = {value}
          placeholder={placeholder}
          onChange={(event) => {
            listener(event);
          }}
        ></input>
        <div className={errorNotification}>
          <img alt="error"></img>
          <span>This field is required</span>
        </div>
      </div>
    );
  }