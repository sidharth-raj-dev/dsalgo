import os

def read_problem_files(directory):
    slides = []
    for filename in os.listdir(directory):
        if filename.endswith(".txt"):
            problem_name = os.path.splitext(filename)[0].replace("_", " ").title()
            file_path = os.path.join(directory, filename)
            with open(file_path, 'r') as file:
                content = file.read().strip()
            
            slide = f"""
            {{
                title: "{problem_name}",
                difficulty: "Easy",
                timeEstimate: "15 mins",
                solution: `
{content}`
            }}"""
            slides.append(slide)
    
    return slides

# Assuming the text files are in a directory named 'problems'
slides = read_problem_files('level1')

# Print the slides array in the requested format
print("const slides = [")
print(",\n".join(slides))
print("];")