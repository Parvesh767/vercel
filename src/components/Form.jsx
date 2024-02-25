import { Navigate, useNavigate } from "react-router-dom";

export default function Form() {
    const navigate = useNavigate();
    function handleSubmit(e) {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);

        //   fetch('/some-api', { method: form.method, body: formData });

        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);

        navigate("/sell", { state: { data: formJson } });

    }

    return (

        <>

            <form method="post" onSubmit={handleSubmit}>
                <label>
                    Item: <input name="item" placeholder="item name" required/>
                </label>
                <hr />

                <label>
                    price: <input name="price" placeholder="price" required/>
                </label>
                <hr />

                <label>
                    Quantity: <input name="quan" placeholder="quantity" required/>
                </label>
                <hr />
                {/* <label>
          Checkbox: <input type="checkbox" name="myCheckbox" defaultChecked={true} />
        </label>
        <hr />
        <p>
          Radio buttons:
          <label><input type="radio" name="myRadio" value="option1" /> Option 1</label>
          <label><input type="radio" name="myRadio" value="option2" defaultChecked={true} /> Option 2</label>
          <label><input type="radio" name="myRadio" value="option3" /> Option 3</label>
        </p>
        <hr /> */}
                <button type="reset">Reset form</button>
                <button type="submit">Submit form</button>
            </form>


        </>

    );
}
