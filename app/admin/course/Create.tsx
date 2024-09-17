import { SimpleForm, Create, TextInput, required } from "react-admin";

const CourseCreate = () => {
  return (
    <div className="w-[1080px]">
      <Create>
        <SimpleForm>
          <TextInput source="title" validate={[required()]} label="Title" />
          <TextInput source="imgSrc" validate={[required()]} label="Image" />
        </SimpleForm>
      </Create>
    </div>
  );
};
export default CourseCreate;
