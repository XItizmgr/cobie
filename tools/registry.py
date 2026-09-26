from tools.filesystem import read_file, write_file, list_directory


class ToolRegister:
    def __init__(self):
        self.tools = {
            "read_file": read_file,
            "write_file": write_file,
            "list_directory": list_directory,
        }
    def execute(self, name, args):
        if name not in self.tools:
            return f"Tool '{name}' does not exist"
        tool = self.tools[name]
        try:
            return tool(**args)
        except Exception as e:
            return f"Tool error: {e}"

if __name__ == "__main__":
    registry = ToolRegister()
    print(registry.tools)
    print(registry.execute(
        "read_file",
        {"path": "README.md"}
    ))
    print(registry.execute(
        "list_directory",
        {"path": "."}
    ))