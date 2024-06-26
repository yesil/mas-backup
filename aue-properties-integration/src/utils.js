export const formatNewCFStructureToOld = (newCF) => {
  const { title, description, path, id, created, modified, published, status, model, fields, references } = newCF;
  const oldStructure = {
    title,
    description,
    path,
    id,
    created,
    modified,
    published,
    status,
    model,
    elements: {},
    references: {},
    variations: {},
    metadata: {},
  };

  // Populating elements with relevant field values
  fields.forEach((field) => {
    if (field.type === "long-text") {
      oldStructure.elements[field.name] = {
        contentType: field.mimeType,
        value: field.multiple ? field.values : field.values[0],
      };
    } else {
      oldStructure.elements[field.name] = field.multiple ? field.values : field.values[0];
    }
  });

  // Populating references with relevant reference values
  references.forEach((reference) => {
    const { name, path, created, status, title, model } = reference;
    oldStructure.references[reference.fieldName] = {
      name,
      mimeType: reference["dc:format"],
      size: reference["repo:size"],
      width: reference["tiff:ImageWidth"],
      height: reference["tiff:ImageHeight"],
      id: reference.assetId,
      path,
      created,
      status,
      title,
      model,
    };
  });

  return oldStructure;
};
