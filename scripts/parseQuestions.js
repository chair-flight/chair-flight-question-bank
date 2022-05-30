const questions = fs
  .readdirSync("./src/questions")
  .filter((fileName) => fileName.includes(".ts"))
  .map((fileName) => fs.readFileSync(`./pages/${fileName}`).toString())
  .reduce((sum, file) => {
    const id = frontMatter.SyllabusReference;
    const los = getLosFormMdx(file);

    sum[id] = {
      id: id,
      text: content,
      title: frontMatter.Title,
      questions: [], //Object.keys(questions),
      los: Object.keys(los),
    };
    return sum;
  }, {});
