export function authorizeModification(req, res, next) {
  const userId = String(req.params.userId);
  const currentUserId = String(req.user.id);

  if (req.user.role !== "parent" && currentUserId !== userId) {
    return res.status(403).json({ error: "Access denied" });
  }

  next();
}
