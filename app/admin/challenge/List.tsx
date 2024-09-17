import {
  Datagrid,
  List,
  NumberField,
  ReferenceField,
  InfiniteList,
  SelectField,
  TextField,
} from "react-admin";

const ChallengeList = () => {
  return (
    <List>
      <InfiniteList>
        <Datagrid rowClick="edit">
          <TextField source="id" />
          <TextField source="question" />
          <SelectField
            source="type"
            choices={[
              {
                id: "SELECT",
                name: "SELECT",
              },
              {
                id: "ASSIST",
                name: "ASSIST",
              },
            ]}
          />
          <ReferenceField source="lessonId" reference="lessons" />

          <NumberField source="order" />
        </Datagrid>
      </InfiniteList>
    </List>
  );
};
export default ChallengeList;
