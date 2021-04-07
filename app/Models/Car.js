export default class Car {
    constructor(data) {
        this.make = data.make
        this.model = data.model
        this.year = data.year
        this.price = data.price
        this.imgUrl = data.imgUrl
        this.description = data.description || "Uknown"
        this._id = data._id
    }

    get Template() {
        return /*html*/`
        <div class="col-3 border border-info shadow-lg rounded">
            <img class="img-fluid" src="${this.imgUrl}" alt=""/>
            <h1>${this.make}</h1>
            <h3>${this.model}</h3>
            <h3>$${this.price}</h3>
            <p>${this.year}</p>
            <p>${this.description}</p>
            <button class="btn btn-danger btn-block" onclick="app.carController.deleteCar('${this._id}')">Delort</button>
            <button type="button" class="btn btn-primary btn-block" data-toggle="modal" data-target="#editCarModal-${this._id}">
            Edit
        </button>
        ${this.Modal}
        </div>
        `
    }

    get Modal() {
        return /*html*/` 
        <div class="modal fade" id="editCarModal-${this._id}" tabindex="-1" role="dialog" aria-labelledby="modelTitleId"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Edit ${this.make} - ${this.model}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form class="container-fluid" onsubmit="app.carController.editCar(event, '${this._id}')">
                        <div class="row justify-content-center">
                            <div class="col-4">
                                <div class="form-group row">
                                    <label for="make" class="col-sm-12 col-form-label">Make</label>
                                    <div class="col-sm-12">
                                        <input type="text" class="form-control" value="${this.make}" name="make" id="make"
                                            placeholder="">
                                    </div>
                                    <label for="model" class="col-sm-12 col-form-label">Model</label>
                                    <div class="col-sm-12">
                                        <input type="text" class="form-control" value="${this.model}" name="model" id="model"
                                            placeholder="">
                                    </div>
                                    <label for="year" class="col-sm-12 col-form-label">Year</label>
                                    <div class="col-sm-12">
                                        <input type="range" value="${this.year}" min="1900" max="2020" class="form-control" name="year"
                                            id="year" placeholder="">
                                    </div>
                                    <label for="imgUrl" class="col-sm-12 col-form-label">Image Url</label>
                                    <div class="col-sm-12">
                                        <input type="text" class="form-control" value="${this.imgUrl}" name="imgUrl" id="imgUrl"
                                            placeholder="">
                                    </div>
                                    <label for="price" class="col-sm-12 col-form-label">Price</label>
                                    <div class="col-sm-12">
                                        <input type="number" min="1" class="form-control" value="${this.price}" name="price" id="price"
                                            placeholder="">
                                    </div>
                                    <label for="description" class="col-sm-12 col-form-label">Description</label>
                                    <div class="col-sm-12">
                                    <textarea name="description" class="form-control" id="" cols="30" rows="10">${this.description}</textarea>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <div class="offset-sm-2 col-sm-10">
                                        <button type="submit" class="btn btn-primary">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save</button>
                </div>
            </div>
        </div>
    </div>
            `

    }
}
