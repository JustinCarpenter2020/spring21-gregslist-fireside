export default class NotificationService{
  static async cat(title="hellooooooo"){
    Swal.fire({
      title: 'Custom width, padding, background.',
      width: 600,
      padding: '3em',
      background: '#fff url(/images/trees.png)',
      backdrop: `
        rgba(0,0,123,0.4)
        url("/images/nyan-cat.gif")
        left top
        no-repeat
      `
    })

  }


  
  static async confirmAction(title = 'Are you sure?', text = "You won't be able to revert this!") {
    try {
      const res = await Swal.fire({
        title: title,
        text: text,
        icon: 'warning',
        // iconColor: '#FF10F0',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      })
      console.log(res)
      if (res.isConfirmed) {
        return true
      }
      return false
    } catch (error) {
      console.error(error)
    }
  }


  static toast(title = 'Default Toasty', display = 'success') {
    // @ts-ignore
    Swal.fire({
      title: title,
      icon: display,
      position: 'top-right',
      timer: 3000,
      toast: true,
      showConfirmButton: false,
      background: "black",
      iconHtml: '<img src="https://media.giphy.com/media/sBQ1lBvDLz476/giphy.gif" style="width:50px; border-radius: 50%">'
    })
  }

}

