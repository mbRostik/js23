import React from 'react';
import ReactDOM from 'react-dom/client';


class Ex1 extends React.Component {
    render() {
        const { name, surname, age } = this.props;

        return (
            <tr>
                <td>{name}</td>
                <td>{surname}</td>
                <td>{age}</td>
            </tr>
        );
    }
}

class Ex1_1 extends React.Component {
    render() {
        const { users } = this.props;

        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Prizvushche</th>
                        <th>age</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <Ex1 key={index} name={user.name} surname={user.surname} age={user.age} />
                    ))}
                </tbody>
            </table>
        );
    }
}

class Ex1_2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [
                { name: 'Eren', surname: 'Jager', age: 25 },
                { name: 'Aizen', surname: 'Sosuke', age: 30 },
                { name: 'Erwin', surname: 'Smith', age: 20 },
            ],
        };
    }

    render() {
        const { users } = this.state;

        return <Ex1_1 users={users} />;
    }
}

class Ex2 extends React.Component {
    handleClick = () => {
        this.props.showMessage();
    }

    render() {
        const { firstName, lastName, age } = this.props;

        return (
            <tr>
                <td>{firstName}</td>
                <td>{lastName}</td>
                <td>{age}</td>
                <td>
                    <a href="#" onClick={this.handleClick}>Show Message</a>
                </td>
            </tr>
        );
    }
}

class Ex2_1 extends React.Component {
    state = {
        users: [
            { firstName: 'Eren', lastName: 'Jager', age: 25 },
            { firstName: 'Aizen', lastName: 'Sosuke', age: 30 },
            { firstName: 'Erwin', lastName: 'Smith', age: 20 },
        ],
    };

    showMessage = () => {
        alert('!');
    }

    render() {
        const { users } = this.state;

        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Prizvushche</th>
                        <th>age</th>
                        <th>Event</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <Ex2
                            key={index}
                            firstName={user.firstName}
                            lastName={user.lastName}
                            age={user.age}
                            showMessage={this.showMessage}
                        />
                    ))}
                </tbody>
            </table>
        );
    }
}

class Ex3 extends React.Component {
    handleClick = () => {
        const { firstName } = this.props;
        this.props.showMessage(`Name користувача: ${firstName}`);
    }

    render() {
        const { firstName, lastName, age } = this.props;

        return (
            <tr>
                <td>{firstName}</td>
                <td>{lastName}</td>
                <td>{age}</td>
                <td>
                    <a href="#" onClick={this.handleClick}>Show Message</a>
                </td>
            </tr>
        );
    }
}

class Ex3_1 extends React.Component {
    state = {
        users: [
            { firstName: 'Eren', lastName: 'Jager', age: 25 },
            { firstName: 'Aizen', lastName: 'Sosuke', age: 30 },
            { firstName: 'Erwin', lastName: 'Smith', age: 20 },
        ],
    };

    showMessage = (message) => {
        alert(message);
    }

    render() {
        const { users } = this.state;

        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Prizvushche</th>
                        <th>age</th>
                        <th>Event</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <Ex3
                            key={index}
                            firstName={user.firstName}
                            lastName={user.lastName}
                            age={user.age}
                            showMessage={this.showMessage}
                        />
                    ))}
                </tbody>
            </table>
        );
    }
}

class Ex4 extends React.Component {
    handleClick = () => {
        const { index } = this.props;
        this.props.showMessage(index);
    }

    render() {
        const { firstName, lastName, age } = this.props;

        return (
            <tr>
                <td>{firstName}</td>
                <td>{lastName}</td>
                <td>{age}</td>
                <td>
                    <a href="#" onClick={this.handleClick}>Show Message</a>
                </td>
            </tr>
        );
    }
}

class Ex4_1 extends React.Component {
    state = {
        users: [
            { firstName: 'Eren', lastName: 'Jager', age: 25 },
            { firstName: 'Aizen', lastName: 'Sosuke', age: 30 },
            { firstName: 'Erwin', lastName: 'Smith', age: 20 },
        ],
    };

    showMessage = (index) => {
        alert(`Користувач з номером ${index} був натиснутий`);
    }

    render() {
        const { users } = this.state;

        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Prizvushche</th>
                        <th>age</th>
                        <th>Event</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <Ex4
                            key={index}
                            index={index}
                            firstName={user.firstName}
                            lastName={user.lastName}
                            age={user.age}
                            showMessage={this.showMessage}
                        />
                    ))}
                </tbody>
            </table>
        );
    }
}

class Ex5 extends React.Component {
    handleDeleteUser = () => {
        this.props.deleteUser(this.props.index);
    }

    render() {
        const { firstName, lastName, age } = this.props;

        return (
            <tr>
                <td>{firstName}</td>
                <td>{lastName}</td>
                <td>{age}</td>
                <td>
                    <a href="#" onClick={this.handleDeleteUser}>Delete User</a>
                </td>
            </tr>
        );
    }
}

class Ex5_1 extends React.Component {
    state = {
        users: [
            { firstName: 'Eren', lastName: 'Jager', age: 25 },
            { firstName: 'Aizen', lastName: 'Sosuke', age: 30 },
            { firstName: 'Erwin', lastName: 'Smith', age: 20 },
        ],
    };

    deleteUser = (index) => {
        const { users } = this.state;
        this.setState({ users: users.filter((user, i) => i !== index) });
    }

    render() {
        const { users } = this.state;

        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Prizvushche</th>
                        <th>age</th>
                        <th>Event</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <Ex5
                            key={index}
                            firstName={user.firstName}
                            lastName={user.lastName}
                            age={user.age}
                            index={index}
                            deleteUser={this.deleteUser}
                        />
                    ))}
                </tbody>
            </table>
        );
    }
}

class Ex_6 extends React.Component {
    state = {
        isEditMode: false,
        editedText: this.props.text
    };

    handleEditClick = () => {
        this.setState({
            isEditMode: true
        });
    };

    handleEditChange = event => {
        this.setState({
            editedText: event.target.value
        });
    };

    handleEditBlur = () => {
        this.setState({
            isEditMode: false
        });
        this.props.onEdit(this.state.editedText);
    };

    render() {
        const { text } = this.props;
        const { isEditMode, editedText } = this.state;

        return (
            <li>
                {isEditMode ? (
                    <input
                        type="text"
                        value={editedText}
                        onChange={this.handleEditChange}
                        onBlur={this.handleEditBlur}
                        autoFocus
                    />
                ) : (
                    <React.Fragment>
                        {text}
                        <button onClick={this.handleEditClick}>редагувати</button>
                    </React.Fragment>
                )}
            </li>
        );
    }
}

class Ex6_1 extends React.Component {
    state = {
        items: ['перший', 'другий', 'третій']
    };

    handleEditItem = (index, newText) => {
        const newItems = [...this.state.items];
        newItems[index] = newText;

        this.setState({
            items: newItems
        });
    };

    render() {
        const { items } = this.state;

        return (
            <ul>
                {items.map((item, index) => (
                    <Ex_6
                        key={index}
                        text={item}
                        onEdit={newText => this.handleEditItem(index, newText)}
                    />
                ))}
            </ul>
        );
    }
}

class Ex7 extends React.Component {
    state = {
        isEditing: false,
        name: this.props.name,
        price: this.props.price,
        quantity: this.props.quantity,
    };

    handleNameChange = (event) => {
        this.setState({ name: event.target.value });
    };

    handlePriceChange = (event) => {
        this.setState({ price: event.target.value });
    };

    handleQuantityChange = (event) => {
        this.setState({ quantity: event.target.value });
    };

    handleEditClick = () => {
        this.setState({ isEditing: true });
    };

    handleSaveClick = () => {
        const { name, price, quantity } = this.state;
        this.props.onSave(this.props.id, name, price, quantity);
        this.setState({ isEditing: false });
    };

    handleCancelClick = () => {
        this.setState({
            isEditing: false,
            name: this.props.name,
            price: this.props.price,
            quantity: this.props.quantity,
        });
    };

    handleDeleteClick = () => {
        this.props.onDelete(this.props.id);
    };

    render() {
        const { name, price, quantity, isEditing } = this.state;
        const total = price * quantity;

        if (isEditing) {
            return (
                <tr>
                    <td>
                        <input type="text" value={name} onChange={this.handleNameChange} />
                    </td>
                    <td>
                        <input type="number" value={price} onChange={this.handlePriceChange} />
                    </td>
                    <td>
                        <input type="number" value={quantity} onChange={this.handleQuantityChange} />
                    </td>
                    <td>
                        <button onClick={this.handleSaveClick}>Зберегти</button>
                        <button onClick={this.handleCancelClick}>Скасувати</button>
                    </td>
                </tr>
            );
        }

        return (
            <tr>
                <td>{name}</td>
                <td>{price}</td>
                <td>{quantity}</td>
                <td>{total}</td>
                <td>
                    <button onClick={this.handleEditClick}>Редагувати</button>
                    <button onClick={this.handleDeleteClick}>Видалити</button>
                </td>
            </tr>
        );
    }
}

class Ex7_1 extends React.Component {
    state = {
        products: [
            { id: 1, name: 'Щось 1', price: 10, quantity: 2 },
            { id: 2, name: 'Щось 2', price: 5, quantity: 3 },
            { id: 3, name: 'Щось 3', price: 15, quantity: 1 },
        ],
    };

    handleSave = (id, name, price, quantity) => {
        const { products } = this.state;
        const index = products.findIndex((product) => product.id === id);
        const product = { id, name, price, quantity };
        products.splice(index, 1, product);
        this.setState({ products });
    };

    handleDelete = (id) => {
        const { products } = this.state;
        const index = products.findIndex((product) => product.id === id);
        products.splice(index, 1);
        this.setState({ products });
    };

    render() {
        const { products } = this.state;
        return (
            <table>
                <thead>
                    <tr>
                        <th>Назва</th>
                        <th>Ціна</th>
                        <th>Кількість</th>
                        <th>Загалом</th>
                        <th>Event</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <Ex7
                            key={product.id}
                            id={product.id}
                            name={product.name}
                            price={product.price}
                            quantity={product.quantity}
                            onSave={this.handleSave}
                            onDelete={this.handleDelete}
                        />
                    ))}
                </tbody>
            </table>
        );
    }
}

class ProductForm extends React.Component {
    state = {
        name: '',
        price: '',
        quantity: '',
    };

    handleNameChange = (event) => {
        this.setState({ name: event.target.value });
    };

    handlePriceChange = (event) => {
        this.setState({ price: event.target.value });
    };

    handleQuantityChange = (event) => {
        this.setState({ quantity: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const { name, price, quantity } = this.state;
        this.props.onSubmit(name, price, quantity);
        this.setState({
            name: '',
            price: '',
            quantity: '',
        });
    };

    render() {
        const { name, price, quantity } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={name} onChange={this.handleNameChange} placeholder="Name" required />
                <input type="number" value={price} onChange={this.handlePriceChange} placeholder="Price" min="0" step="0.01" required />
                <input type="number" value={quantity} onChange={this.handleQuantityChange} placeholder="Quantity" min="1" required />
                <button type="submit">Add</button>
            </form>
        );
    }
}

class Ex8 extends React.Component {
    state = {
        isEditing: false,
        name: this.props.name,
        price: this.props.price,
        quantity: this.props.quantity,
    };

    handleNameChange = (event) => {
        this.setState({ name: event.target.value });
    };

    handlePriceChange = (event) => {
        this.setState({ price: event.target.value });
    };

    handleQuantityChange = (event) => {
        this.setState({ quantity: event.target.value });
    };

    handleEditClick = () => {
        this.setState({ isEditing: true });
    };

    handleSaveClick = () => {
        const { name, price, quantity } = this.state;
        this.props.onSave(this.props.id, name, price, quantity);
        this.setState({ isEditing: false });
    };

    handleCancelClick = () => {
        this.setState({
            isEditing: false,
            name: this.props.name,
            price: this.props.price,
            quantity: this.props.quantity,
        });
    };

    handleDeleteClick = () => {
        this.props.onDelete(this.props.id);
    };

    render() {
        const { name, price, quantity, isEditing } = this.state;
        const total = price * quantity;

        if (isEditing) {
            return (
                <tr>
                    <td>
                        <input type="text" value={name} onChange={this.handleNameChange} />
                    </td>
                    <td>
                        <input type="number" value={price} onChange={this.handlePriceChange} min="0" step="0.01" />
                    </td>
                    <td>
                        <input type="number" value={quantity} onChange={this.handleQuantityChange} min="1" />
                    </td>
                    <td>{total.toFixed(2)}</td>
                    <td>
                        <button onClick={this.handleSaveClick}>Зберегти</button>
                        <button onClick={this.handleCancelClick}>Скасувати</button>
                    </td>
                </tr>
            );
        }
        return (
            <tr>
                <td>{name}</td>
                <td>${price.toFixed(2)}</td>
                <td>{quantity}</td>
                <td>${total.toFixed(2)}</td>
                <td>
                    <button onClick={this.handleEditClick}>Редагувати</button>
                    <button onClick={this.handleDeleteClick}>Видалити</button>
                </td>
            </tr>
        );
    }
}

class Ex8_1 extends React.Component {
    state = {
        products: [
            { id: 1, name: 'Щось 1', price: 10, quantity: 2 },
            { id: 2, name: 'Щось 2', price: 5, quantity: 3 },
            { id: 3, name: 'Щось 3', price: 15, quantity: 1 },
        ],
    };

    handleAddProduct = (name, price, quantity) => {
        const { products } = this.state;
        const newProduct = {
            id: products.length + 1,
            name,
            price: parseFloat(price),
            quantity: parseInt(quantity),
        };
        this.setState({ products: [...products, newProduct] });
    };

    handleSaveProduct = (id, name, price, quantity) => {
        const { products } = this.state;
        const productIndex = products.findIndex((p) => p.id === id);
        const updatedProduct = {
            ...products[productIndex],
            name,
            price: parseFloat(price),
            quantity: parseInt(quantity),
        };
        const updatedProducts = [...products];
        updatedProducts[productIndex] = updatedProduct;
        this.setState({ products: updatedProducts });
    };

    handleDeleteProduct = (id) => {
        const { products } = this.state;
        const updatedProducts = products.filter((p) => p.id !== id);
        this.setState({ products: updatedProducts });
    };

    render() {
        const { products } = this.state;

        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Назва</th>
                            <th>Ціна</th>
                            <th>Кількість</th>
                            <th>Загалом</th>
                            <th>Event</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((p) => (
                            <Ex8
                                key={p.id}
                                id={p.id}
                                name={p.name}
                                price={p.price}
                                quantity={p.quantity}
                                onSave={this.handleSaveProduct}
                                onDelete={this.handleDeleteProduct}
                            />
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td>
                                <ProductForm onSubmit={this.handleAddProduct} />
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        );
    }
}


class Ex9 extends React.Component {
    state = {
        isEditing: false,
        name: this.props.name,
        price: this.props.price,
        quantity: this.props.quantity,
    };

    handleNameChange = (event) => {
        this.setState({ name: event.target.value });
    };

    handlePriceChange = (event) => {
        this.setState({ price: event.target.value });
    };

    handleQuantityChange = (event) => {
        this.setState({ quantity: event.target.value });
    };

    handleEditClick = () => {
        this.setState({ isEditing: true });
    };

    handleSaveClick = () => {
        const { name, price, quantity } = this.state;
        this.props.onSave(this.props.id, name, price, quantity);
        this.setState({ isEditing: false });
    };

    handleCancelClick = () => {
        this.setState({
            isEditing: false,
            name: this.props.name,
            price: this.props.price,
            quantity: this.props.quantity,
        });
    };

    handleDeleteClick = () => {
        this.props.onDelete(this.props.id);
    };

    render() {
        const { name, price, quantity, isEditing } = this.state;
        const total = price * quantity;

        if (isEditing) {
            return (
                <tr>
                    <td>
                        <input type="text" value={name} onChange={this.handleNameChange} />
                    </td>
                    <td>
                        <input type="number" value={price} onChange={this.handlePriceChange} min="0" step="0.01" />
                    </td>
                    <td>
                        <input type="number" value={quantity} onChange={this.handleQuantityChange} min="1" />
                    </td>
                    <td>{total.toFixed(2)}</td>
                    <td>
                        <button onClick={this.handleSaveClick}>Зберегти</button>
                        <button onClick={this.handleCancelClick}>Скасувати</button>
                    </td>
                </tr>
            );
        }
        return (
            <tr>
                <td>{name}</td>
                <td>${price.toFixed(2)}</td>
                <td>{quantity}</td>
                <td>${total.toFixed(2)}</td>
                <td>
                    <button onClick={this.handleEditClick}>Редагувати</button>
                    <button onClick={this.handleDeleteClick}>Видалити</button>
                </td>
            </tr>
        );
    }
}

class Ex9_1 extends React.Component {
    state = {
        products: [
            { id: 1, name: 'Щось 1', price: 10, quantity: 2 },
            { id: 2, name: 'Щось 2', price: 5, quantity: 3 },
            { id: 3, name: 'Щось 3', price: 15, quantity: 1 },
        ],
    };

    handleAddProduct = (name, price, quantity) => {
        const { products } = this.state;
        const newProduct = {
            id: products.length + 1,
            name,
            price: parseFloat(price),
            quantity: parseInt(quantity),
        };
        this.setState({ products: [...products, newProduct] });
    };

    handleSaveProduct = (id, name, price, quantity) => {
        const { products } = this.state;
        const productIndex = products.findIndex((p) => p.id === id);
        const updatedProduct = {
            ...products[productIndex],
            name,
            price: parseFloat(price),
            quantity: parseInt(quantity),
        };
        const updatedProducts = [...products];
        updatedProducts[productIndex] = updatedProduct;
        this.setState({ products: updatedProducts });
    };

    handleDeleteProduct = (id) => {
        const { products } = this.state;
        const updatedProducts = products.filter((p) => p.id !== id);
        this.setState({ products: updatedProducts });
    };

    render() {
        const { products } = this.state;
        const total = products.reduce((acc, p) => acc + p.price * p.quantity, 0);
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Назва</th>
                            <th>Ціна</th>
                            <th>Кількість</th>
                            <th>Загалом</th>
                            <th>Event</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((p) => (
                            <Ex9
                                key={p.id}
                                id={p.id}
                                name={p.name}
                                price={p.price}
                                quantity={p.quantity}
                                onSave={this.handleSaveProduct}
                                onDelete={this.handleDeleteProduct}
                            />
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="3">Загалом</td>
                            <td>${total.toFixed(2)}</td>
                            <td>
                                <ProductForm onSubmit={this.handleAddProduct} />
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        );
    }
}

class Ex10 extends React.Component {
    state = {
        isEditing: false,
        name: this.props.name,
        price: this.props.price,
        quantity: this.props.quantity,
        isChecked: false,
    };

    handleNameChange = (event) => {
        this.setState({ name: event.target.value });
    };

    handlePriceChange = (event) => {
        this.setState({ price: event.target.value });
    };

    handleQuantityChange = (event) => {
        this.setState({ quantity: event.target.value });
    };

    handleEditClick = () => {
        this.setState({ isEditing: true });
    };

    handleSaveClick = () => {
        const { name, price, quantity } = this.state;
        this.props.onSave(this.props.id, name, price, quantity);
        this.setState({ isEditing: false });
    };

    handleCancelClick = () => {
        this.setState({
            isEditing: false,
            name: this.props.name,
            price: this.props.price,
            quantity: this.props.quantity,
            isChecked: false,
        });
    };

    handleDeleteClick = () => {
        this.props.onDelete(this.props.id);
    };

    handleCheckboxChange = () => {
        this.setState((prevState) => ({
            isChecked: !prevState.isChecked,
        }));
    };

    render() {
        const { name, price, quantity, isEditing, isChecked } = this.state;
        const total = price * quantity;

        if (isEditing) {
            return (
                <tr>
                    <td>
                        <input type="text" value={name} onChange={this.handleNameChange} />
                    </td>
                    <td>
                        <input type="number" value={price} onChange={this.handlePriceChange} min="0" step="0.01" />
                    </td>
                    <td>
                        <input type="number" value={quantity} onChange={this.handleQuantityChange} min="0" />
                    </td>
                    <td>{total.toFixed(2)}</td>
                    <td>
                        <button onClick={this.handleSaveClick}>Save</button>
                        <button onClick={this.handleCancelClick}>Cancel</button>
                    </td>
                </tr>
            );
        }
        return (
            <tr>
                <td>
                    <input type="checkbox" checked={isChecked} onChange={this.handleCheckboxChange} />
                    <span>{name}</span>
                </td>
                <td>{price.toFixed(2)}</td>
                <td>{quantity}</td>
                <td>{total.toFixed(2)}</td>
                <td>
                    <button onClick={this.handleEditClick}>Edit</button>
                    <button onClick={this.handleDeleteClick}>Delete</button>
                </td>
            </tr>
        );
    }
}

class Ex10_1 extends React.Component {
    state = {
        products: [
            { id: 1, name: "Product 1", price: 10, quantity: 2 },
            { id: 2, name: "Product 2", price: 20, quantity: 1 },
            { id: 3, name: "Product 3", price: 5, quantity: 10 },
        ],
    };

    handleProductSave = (id, name, price, quantity) => {
        const { products } = this.state;
        const index = products.findIndex((product) => product.id === id);
        if (index === -1) {
            console.error("Product not found");
            return;
        }
        products[index] = { ...products[index], name, price, quantity };
        this.setState({ products });
    };

    handleProductDelete = (id) => {
        const { products } = this.state;
        const filteredProducts = products.filter((product) => product.id !== id);
        this.setState({ products: filteredProducts });
    };

    handleAddProduct = () => {
        const { products } = this.state;
        const id = products.length + 1;
        const newProduct = { id, name: "New Product", price: 0, quantity: 0 };
        this.setState({ products: [...products, newProduct] });
    };

    render() {
        const { products } = this.state;

        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <Ex10
                                key={product.id}
                                id={product.id}
                                name={product.name}
                                price={product.price}
                                quantity={product.quantity}
                                onSave={this.handleProductSave}
                                onDelete={this.handleProductDelete}
                            />
                        ))}
                    </tbody>
                </table>
                <button onClick={this.handleAddProduct}>Add Product</button>
            </div>
        );
    }
}
const root = ReactDOM.createRoot(document.getElementById("root")).render(
    <div>
        <p>Ex1</p>
        <Ex1_2 />

        <p>Ex2</p>
        <Ex2_1 />

        <p>Ex3</p>
        <Ex3_1 />

        <p>Ex4</p>
        <Ex4_1 />

        <p>Ex5</p>
        <Ex5_1 />

        <p>Ex6</p>
        <Ex6_1 />

        <p>Ex7</p>
        <Ex7_1 />

        <p>Ex8</p>
        <Ex8_1 />

        <p>Ex9</p>
        <Ex9_1 />

        <p>Ex10</p>
        <Ex10_1 />

        
       
    </div>

);