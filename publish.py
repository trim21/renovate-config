import json
import os
import os.path


def main():
    with open("package.json", encoding="utf8") as f:
        pkg = json.load(f)
    files = []
    for file in os.listdir("./src"):
        files.append(os.path.join("src", file))
    print(files)
    pkg["renovate-config"] = {
        fs.split(".")[0].split("/")[0]: load_json(fs) for fs in files
    }
    with open("package.json", "w+", encoding="utf-8") as f:
        json.dump(pkg, f, indent=2, ensure_ascii=False)


def load_json(fs) -> dict:
    with open(fs, encoding="utf-8") as f:
        return json.load(f)


if __name__ == "__main__":
    main()
