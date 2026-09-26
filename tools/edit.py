from pathlib import Path


def edit_file(old_text, new_text, path):
    file_path = Path(path)
    if not file_path.exists():
        return {"success": False, "error": f"Given path doesn't exists{path}"}
    if not file_path.is_file():
        return {"success": False, "error": f"Given path is not file{path}"}
    content = file_path.read_text()

    if old_text not in content:
        return {"success": False, "error": "The text to replace was not found."}
    new_content = content.replace(old_text, new_text, 1)
    file_path.write_text(new_content)
    return {"success": True, "massage": "FIle edited succefully "}
