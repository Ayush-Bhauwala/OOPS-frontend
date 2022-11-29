import "./ImageUploadStyles.css";
import $ from "jquery";

function ImageUpload() {
  function readURL(input) {
    if (input === undefined) {
      return;
    }
    if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = (e) => {
        $(".image-upload-wrap").hide();

        $(".file-upload-image").attr("src", e.target.result);
        $(".file-upload-content").show();

        $(".image-title").html(input.files[0].name);
      };

      reader.readAsDataURL(input.files[0]);
    } else {
      removeUpload();
    }
  }

  function removeUpload() {
    $(".file-upload-input").replaceWith($(".file-upload-input").clone());
    $(".file-upload-content").hide();
    $(".image-upload-wrap").show();
  }
  $(".image-upload-wrap").on("dragover", () => {
    $(".image-upload-wrap").addClass("image-dropping");
  });
  $(".image-upload-wrap").on("dragleave", () => {
    $(".image-upload-wrap").removeClass("image-dropping");
  });

  return (
    <div className="file-upload">
      <button
        className="file-upload-btn"
        type="button"
        onClick={$(".file-upload-input").trigger("click")}
      >
        Add Image
      </button>
      <div className="image-upload-wrap">
        <input
          className="file-upload-input"
          type="file"
          onChange={readURL(this)}
          accept="image/*"
        />
        <div className="drag-text">
          <h3>Drag and drop a file or select add Image</h3>
        </div>
      </div>
      <div className="file-upload-content">
        <img className="file-upload-image" src="#" alt="your img" />
        <div className="image-title-wrap">
          <button type="button" onClick={removeUpload} className="remove-image">
            Remove <span className="image-title">Uploaded Image</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ImageUpload;
