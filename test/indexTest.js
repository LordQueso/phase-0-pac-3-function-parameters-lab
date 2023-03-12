require ( './root.js' );


describe('introduction(name)', function introduction(
  name = "Aki.", 
  nameTwo = "Samip", 
  intro = "Hi, my name is") 
  { it('takes in an argument of a name and returns a phrase with that name using string interpolation', function()
 {
    console.log(intro, name) 
   
    console.log(intro,nameTwo)
    
  })
})



describe('introductionWithLanguage(name, language)', function introductionWithLanguage
(name = "Aki.", 
nameTwo = "Samip",
language = "Ember.js",
 languageTwo = "React",)

  
  {it('takes in two arguments, a name and a language, and returns a phrase using those arguments', function() {
    console.log("Hi, my name is ${name} and I am learning to program ${language}")
    console.log("Hi, my name is ${nameTwo} and I am learning to program ${languageTwo}")
    
  })
})

describe('introductionWithLanguageOptional(name, language)', function introductionWithLanguageOptional(
  name = "Gracie", 
  language = "Javscript")
   {
  it('takes in two arguments, a name and a language, and language defaults to JavaScript', function() {
    console.log("Hi, my name is ${name} and I am learning to program in ${language}")
    
  })
})

describe('introductionWithLanguageOptional(name, language)', function
  introductionWithLanguageOptional(
    name = "Gracie",
     language = "Python") {

  it('takes in two arguments, a name and a language, and the default value can be overridden with an argument', function() {
    console.log("Hi, my name is ${name} and I am learning to program in ${language}.")
   
  })
})
